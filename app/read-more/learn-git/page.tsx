import { Article } from '@/components/ui/Article'
import { Card } from '@/components/ui/Card'
import { CodeBlock } from '@/components/ui/CodeBlock'

export const metadata = {
  title: 'Learn Git - Koeuk Dev',
  description: 'Git tracks every change to your code so you can collaborate, experiment, and recover.',
}

const dailyCode = `git status               # see what changed
git add .                # stage everything
git commit -m "Add login form"
git pull --rebase        # update with latest
git push                 # share your work`

const branchCode = `git switch -c feature/signup    # create + switch
# work, commit, repeat
git push -u origin feature/signup`

const undoCode = `git restore file.txt         # undo unstaged changes to a file
git restore --staged file.txt # unstage
git reset HEAD~1             # undo last commit (keep changes)
git reflog                   # find any commit you've ever made`

export default function Page() {
  return (
    <Article title="Learn Git: Version Control Essentials" date="Apr 6, 2026" tags={['Git', 'Tools']}>
      <p>
        Git tracks every change to your code so you can collaborate, experiment, and recover. The CLI looks
        intimidating but most of daily work is six commands.
      </p>

      <h2>1. The Daily Loop</h2>
      <CodeBlock language="bash" code={dailyCode} />

      <h2>2. Branching</h2>
      <p>Branches are cheap. Use them for everything: features, fixes, experiments.</p>
      <CodeBlock language="bash" code={branchCode} />

      <h2>3. Merge vs Rebase</h2>
      <ul>
        <li><strong>Merge</strong> — preserves history exactly. Creates a merge commit.</li>
        <li><strong>Rebase</strong> — replays your commits on top of another branch. Cleaner linear history, but rewrites commit hashes.</li>
        <li>Rule of thumb: merge for shared branches, rebase for your local feature branch before pushing.</li>
      </ul>

      <h2>4. Recovery & Undo</h2>
      <CodeBlock language="bash" code={undoCode} />

      <Card className="space-y-3">
        <h2 className="!mt-0">Summary</h2>
        <p>
          Commit often, write meaningful messages, branch fearlessly. Git&apos;s reflog will save you from almost any mistake —
          you just need to know it exists.
        </p>
      </Card>
    </Article>
  )
}
