# 매번 구하며 비교하는 브루트포스 알고리듬
for tc in range(1, int(input()) + 1):
    N, M = map(int, input().split())
    nums = list(map(int, input().split()))

    # 최초값 설정
    max_sum, min_sum = 0, 987654321

    for i in range(N-M+1):
        # 슬라이싱 통해 구간합 구하기
        cnt = sum(nums[i:i+M])

        # 최대값 및 최소값 갱신
        max_sum = max(cnt, max_sum)
        min_sum = min(cnt, min_sum)

    print(f'#{tc} {max_sum - min_sum}')
    
    
    
# 슬라이딩 윈도우 기법 활용
for tc in range(1, int(input()) + 1):
    N, M = map(int, input().split())
    nums = list(map(int, input().split()))

    # 첫 번째 범위의 값 구하기
    cnt = sum(nums[:M])
    # 최초값 설정
    max_sum, min_sum = cnt, cnt

    for i in range(N-M):
        # 슬라이딩 윈도우: 가장 왼쪽 값 빼고 다음 오른쪽 값 더하기
        cnt += nums[i + M] - nums[i]

        # 최대값 및 최소값 갱신
        max_sum = max(cnt, max_sum)
        min_sum = min(cnt, min_sum)

    print(f'#{tc} {max_sum - min_sum}')