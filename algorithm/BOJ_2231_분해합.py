import sys
input = sys.stdin.readline

N = int(input())

for num in range(1, N+1):                               # 생성자는 반드시 분해합보다 작은 숫자
    disassemble_sum = num + sum(map(int, str(num)))     # 해당 숫자의 분해합을 구해서

    if disassemble_sum == N:                            # 목표하는 숫자와 같다면
        print(num)                                      # 출력
        break                                           # 찾았으면 break(작은 숫자부터 검토)

else:                                                   # 다 돌았는데 못찾았다면
    print(0)                                            # 0을 출력
    
