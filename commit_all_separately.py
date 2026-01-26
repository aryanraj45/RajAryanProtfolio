import subprocess
import os

def run_command(command):
    try:
        result = subprocess.run(command, shell=True, check=True, text=True, capture_output=True)
        print(f"Success: {command}")
        return result.stdout
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
            # Clean up path (sometimes porcelain has quotes or spaces)
            path = line[3:].strip().strip('"')
            files.append(path)
    return files

def main():
    files = get_changed_files()
    if not files:
        print("No changes found.")
        return

    print(f"Found {len(files)} files to commit and push separately...")

    for i, file_path in enumerate(files, 1):
        # Handle filenames with spaces
        escaped_path = f'"{file_path}"'
        
        # Specific messages for the changes made
        filename = os.path.basename(file_path)
        if filename == "App.tsx":
            msg = "feat: add app initialization logs in App.tsx"
        elif filename == "AboutSection.tsx":
            msg = "feat: add Cloud & DevOps interest in AboutSection"
        elif filename == "AchievementsSection.tsx":
            msg = "feat: add Time Management to competencies"
        elif filename == "ContactSection.tsx":
            msg = "ux: add default subject line to contact email"
        elif filename == "ProjectsSection.tsx":
            msg = "a11y: add descriptive titles to project links"
        elif filename == "ResumeSection.tsx":
            msg = "feat: add Postman to developer tools in Resume"
        elif filename == "SocialProfilesSection.tsx":
            msg = "ui: refine section header in SocialProfilesSection"
        elif filename == "ProfileSidebar.tsx":
            msg = "ui: add 'Open for collaborations' status badge"
        elif filename == "NavLink.tsx":
            msg = "refactor: add title prop support to NavLink"
        elif filename == "FloatingDots.tsx":
            msg = "ui: enhance background animation with extra floating dot"
        elif filename == "TabNavigation.tsx":
            msg = "a11y: add ARIA roles and titles to navigation tabs"
        elif filename == "main.tsx":
            msg = "dx: wrap application in StrictMode for development"
        elif filename == "README.md":
            msg = "docs: update features list in README"
        elif filename == "package.json":
            msg = "chore: update project metadata in package.json"
        elif filename == "index.html":
            msg = "seo: update document title and meta description"
        else:
            msg = f"chore: update {filename}"

        print(f"\n[{i}/{len(files)}] Processing {filename}...")
        
        # Git add
        run_command(f"git add {escaped_path}")
        
        # Git commit
        run_command(f'git commit -m "{msg}"')
        
        # Git push
        print(f"Pushing commit for {filename}...")
        run_command("git push")

    print("\n" + "="*40)
    print(f"Successfully created and pushed {len(files)} separate commits!")
    print("="*40)

if __name__ == "__main__":
    main()
