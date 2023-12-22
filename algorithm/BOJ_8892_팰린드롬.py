import sys
input = sys.stdin.readline

for tc in range(int(input())):
    k = int(input())
    words = [input().rstrip() for _ in range(k)]    # 주어진 단어들 입력

    for i in range(k):                              # 2중 for문을 통해 모든 경우 탐색
        for j in range(k):
            if i == j:                              # 같은 단어를 뽑는 경우는 pass(continue)
                continue

            word = words[i] + words[j]              # 두 단어를 뽑아 붙이기

            if word == word[::-1]:                  # 회문이라면,
                print(word)                         # 출력하고
                exit(0)                             # 프로그램 종료(하나만 찾아도 되므로)

    print(0)                                        # 끝까지 못찾았다면 0 출력