# Define color and style codes directly
bold="\033[1m"
normal="\033[0m"
red="\033[31m"
yellow="\033[33m"

# Get the current branch name
branch_name=$(git rev-parse --abbrev-ref HEAD)

# Define the regular expression for the branch name
regex="^(feature|bugfix|hotfix|release|feat|fix|docs|style|refactor|test|chore)/.+"

# Always allow the develop and main branches
if [[ "$branch_name" == "main" || "$branch_name" == "develop" ]]; then
  exit 0
fi

# Verify the branch name
if ! echo "$branch_name" | grep -Eq "$regex"; then
  echo -e "${bold}${red}Error: Invalid branch name${normal}"
  echo -e "The branch name ${bold}${yellow}'$branch_name'${normal} is not valid."
  echo -e "Use Angular conventions, for example: ${bold}feat/new-feature${normal}\n"
  echo -e "Consult the documentation here:"
  echo -e "${bold}https://coding-latam-docs.vercel.app/guides/estandar-de-branches${normal}\n"
  exit 1
fi
