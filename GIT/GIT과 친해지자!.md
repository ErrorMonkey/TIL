## git의 역사

리누스 토발즈가 리누스 오픈소스 커뮤니티에서 협업 힘들다고 툴툴 거리니까 갑자기 혼자 만들어서 "쨘!" 공개함. 이제는 깃이 없던 세상을 상상할 수 없는 개발 분야 필수 협업 툴로 자리 잡음. 영상도 이런 협업 툴 있으면 좋겠다...

## 1. git 시작하기

깃을 처음 설치하면 여러 설정을 해줘야 한다.

```bash
$ git config --<범위> init.defaultBranch main # 기본 브랜치 이름을 main으로 변경

$ git config --<범위> user.name "<user_name>"
$ git config --<범위> user.email "<user_email>"

$ git config --global --list # 깃 설정 확인하기

$ git clone <저장소 주소> # 원격 저장소의 코드를 받아오기
```

--local --global --system 총 3개의 범위가 존재하며, 범위를 지정하지 않으면 기본으로 local로 저장된다.  
local 범위로 설정하면 특정 저장소(repository)로 한정되고, global 범위는 현재 사용자의 모든 저장소를 포함시킨다. 자주 사용하지 않지만 시스템 범위로 설정하면 해당 컴퓨터의 모든 저장소와 사용자를 걸쳐서 적용된다.

지역 범위의 설정 정보는 저장소 폴더의 `.git/config`에 저장되며, 전역 범위의 설정값은 운영체제의 사용자 폴더의 `.gitconfig`에 저장됩니다. 시스템 범위의 설정값은 운영체제에 따라 다른데 유닉스 계열에서는 `/etc/gitconfig`, 윈도우즈 계열에서는 `C:\ProgramData\Git\config`에 저장된다.

> **참고 링크**  
> [스테이지 영역이 있는 이유](https://blog.npcode.com/2012/10/23/git의-staging-area는-어떤-점이-유용한가/)  
> [깃 초기 설정이 잘 정리됨](https://www.daleseo.com/git-config/)

## git의 구조

| 작업공간   | Staging 영역  | Local Repository | Remote Repository |
| :--------- | :-----------: | :--------------: | ----------------: |
| git add => | git commit => |   git push =>    |
|            |               |                  |       <= git pull |

### 목차

1. [git 기본](#본격-git-시작하기!)
2. [branch!](#branch)
3. [conflict!](#인생이-조금-무료할-때-conflict)

---

## 본격 git 시작하기!

> 내 코드가 깃허브 저장소에 닿기를~

`$ git remote -v`
연결된 저장소 확인할 수 있다. 나를 포함한 정말 많은 입문자가 의도하지 않은 곳에서 `git init`을 써서 .git 폴더를 만들고 깃이 꼬여서 1차 뇌정지를 겼는다. `git init` 전에 꼭 연결된 저장소를 확인하도록 하자.

`$ rm -r .git`
의도하지 않은 곳이 로컬 저장소로 지정됐다면 .git 폴더를 삭제하고 로컬 저장소 지정을 해제하자. ~~제대로 삭제가 안될 때는 수동으로...~~

`$ git init`  
터미널에서 현재 위치에 `.git` 폴더를 만들고 앞으로 파일 수정 사항 등을 감시하며 폴더 안에 git 정보를 만들어 관리한다.
~~깃쨩... 지금부터 날.. 지켜봐주지 않을래?~~

`$ git remote add origin <원격 저장소 주소>`  
보통 origin이라는 이름으로 원격 저장소를 등록한다. origin 말고 다른 이름을 쓸 수도 있다. 아직 저장소 개념이 머리에 안 들어오면 여기서 대충 2차 뇌정지를 겪더라...

`$ git remote -v`  
연결된 원격 저장소를 확인할 수 있다. 확인했는데 뭔가 이상하면 `$ git remote remove origin` 이런 명령어로 원격 저장소와 연결을 끊을 수 있다.

> ### 깃헙아 깃헙아 헌 코드를 내놓으렴 fetch, pull, clone
>
> `$ git fetch`
> 원격 저장소의 변경 사항을 로컬 저장소의 remotes 디렉토리에 가져온다. 로컬 저장소의 내용은 변경하지 않는다.
> `$ git pull`
> 원격 저장소의 변경 사항을 로컬 저장소로 가져와 병합한다. 즉 fetch와 merge를 한 번에 수행한다.
> `$ git clone`
> 원격 저장소의 전체 내용을 로컬 저장소에 복사한다. 로컬 저장소의 브랜치는 원격 저장소의 브랜치와 동기화한다.

`$ git status`
수정 되거나 커밋 가능한 파일들을 확인할 수 있다.

`$ git add <파일명>`  
status로 확인한 파일을 스테이지에 올려서 커밋할 준비 하나 하나 올리기 귀찮으면 `git add .`으로 status에서 확인한 파일을 몽땅 스테이지에 올릴 수 있다.
~~깃쨩... 내가 외롭게 혼자 적어온 코드를 스테이징 해줘..~~

`$ git commit -m '뭔 커밋인지 기록하는 메시지'`  
스테이지에 올라온 파일들을 커밋으로 로컬 저장소에 올려서 원격 저장소에 보낼 마지막 준비를 한다.

`$ git push -u <깃헙 저장소 주소> <푸시하려는 로컬의 브랜치 이름>`  
커밋을 저장소로 보내기 ()"잔디심기".진짜최종) -u는 원격 저장소 주소를 외우라는 명령어다. 한 번 푸시하고 나면 이후에는 주소 없이 `git push`만 써도 된다.

`$ git restore --staged <커밋>`
스테이징 취소

`$ git restore --source <커밋 아이디>`
특정 커밋 시점으로 복구

`$ git revert <커밋 아이디>`
특정 커밋을 제거하는 커밋을 추가(~~ㅋㅋ 뭔 말이야~~)

`$ git revert HEAD`
최근 커밋 취소 (머지 커밋도 취소 가능)

`$ git reset --hard <커밋 아이디>` 커밋 시점으로 모든 걸 되돌리기(함부로 쓰면...)  
`$ git reset --soft <커밋 아이디>` 커밋 시점으로 돌리고 이후 변경 사항들은 스테이징 해놓음  
`$ git reset --mixed <커밋 아이디>` 커밋 시점으로 돌리고 변경 사항들은 언스테이징

`$ git diff`  
커밋을 비교하는 명령어 근데 버그 같은 현상이 있어서 잘 안 쓴다.  
그래서 대신 모 쓴다? **git difftool!**  
Vim 에디터로 시각적으로 잘 달라진 점을 보여준다. 내가 진짜 개발을 하고 있다는 기분은 덤!

`$ git difftool <commit id>`  
뒤에 커밋 아이디를 적으면 직접 비교해볼 수 있다

```zsh
$ git log --oneline --graph --decorate --all

# --oneline : 커밋을 한 줄로 요약
# --graph : 커밋의 흐름을 그래프로 보여준다
# --decorate : --decorate=short 옵션을 의미. --decorate=[=short|full|auto|no]
# --all : 현재 branch뿐만 아닌 모든 브랜치의 커밋을 보여준다. all 옵션이 없으면 HEAD와 관계 없는 커밋은 보여주지 않는다
```

커밋 내역과 아이디를 확인할 수 있다

> 진짜 많이 하는 실수  
> `$ git pull origin 로컬의-branch이름`  
> 오리진에서 로컬의 브랜치로 내려달라는 뜻이다. push도 마찬가지.
> 많은 사람들이 저장소의 브랜치로 헷갈려했다.

### 3차 뇌정지 순간

#### :wq

가끔 `git log`나 `git status` 쓰고 터미널에서 못 빠져나오는 경우가 있는데 터미널이 Vim 에디터 같은 생소한 녀석으로 들어가서 그렇다. 대충 :wq 치면 빠져나올 수 있다.

#### >dquote

터미널 창에서 장문을 붙여넣는 등 실수하면 터미널에 뭘 쳐도 `>dquote`만 토해내는 무한지옥에 빠질 때가 있는데 `$ "`를 쓰고 엔터를 치면 빠져나올 수 있다

> **git을 시각적으로 잘 보여주는 vsc git extention**
>
> - Diff Viewer
> - git history
> - git graph

훨씬 편하고 보기 좋은데 낭만은 초큼 부족할지도...

---

## branch!

#### 잔디 심기 다음은 가지치기

`$ git branch 브랜치 이름`  
브랜치를 만들 수 있다.

`$ git branch -M 브랜치 이름`  
메인 브랜치를 정할 수 있다.

`$ git branch -m 브랜치 이름`  
해당 브랜치로 이동한 상태에서 브랜치 이름을 수정할 수 있다.

`$ git switch 옮겨갈 브랜치 이름`  
브랜치를 옮겨다닐 수 있다.

`$ git log --oneline --all --graph`  
브랜치가 갈라지고 커밋한 기록을 시각적으로 보여줌. Head는 현재 머물고 있는 브랜치를 표시. 리누스 토발즈 네이밍 센스 좀 쩌는 듯.ㅎㅎ

`$ git merge 합칠-브랜치-이름`  
메인 브랜치에서 다른 브랜치를 메인 브랜치로 합치기

---

## 인생이 조금 무료할 때... conflict!

```bash
CONFLICT (content): Merge conflict in README.md
```

머지하려는 브랜치가 메인 브랜치와 같은 코드 부분을 다르게 수정해서 생기는 충돌  
원하는 부분 남기고 애드하고 커밋하면 끝.
