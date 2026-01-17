import subprocess
import os

def run_command(command):
    try:
        result = subprocess.run(command, shell=True, check=True, text=True, capture_output=True)
        print(f"Success: {command}")
        return result.stdout.strip()
    except subprocess.CalledProcessError as e:
        print(f"Error running {command}: {e.stderr}")
        return None

def get_changed_files():
    # Get modified and deleted files
    status_output = run_command("git status --porcelain")
    if not status_output:
        return []
    
    files = []
    for line in status_output.split('\n'):
        # status --porcelain returns "XY filename"
        # X=index status, Y=worktree status
        if len(line) > 3:
            files.append(line[3:])
    return files

def main():
    files = get_changed_files()
    if not files:
        print("No changes found.")
        return

    print(f"Found {len(files)} files to commit...")

    for i, file_path in enumerate(files, 1):
        # Handle filenames with spaces
        escaped_path = f'"{file_path}"'
        
        # Message based on file type
        filename = os.path.basename(file_path)
        if "png" in filename:
            msg = f"Add preview image: {filename}"
        elif "pdf" in filename:
            msg = f"Update resume document: {filename}"
        elif "tsx" in filename:
            msg = f"Refactor component: {filename}"
        elif "css" in filename:
            msg = f"Update styles: {filename}"
        elif "README" in filename:
            msg = "Update documentation: README.md"
        else:
            msg = f"Update {filename}"

        print(f"[{i}/{len(files)}] Committing {filename}...")
        
        # Git add
        run_command(f"git add {escaped_path}")
        
        # Git commit
        run_command(f'git commit -m "{msg}"')

    print("\nAll files committed separately!")
    print("Run 'git push' to upload all 21+ commits.")

if __name__ == "__main__":
    main()
