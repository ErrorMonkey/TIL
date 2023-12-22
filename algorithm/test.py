# print(1 in [1,2,3])

gems = [3, 3, 1, 2, 3, 2, 2, 3, 3, 1]

grade = False

test = [1,26,2,5,6,2,8]
temp = 0

# print(min(test))

a={1,2,3}
b=[4,5,6]
c={'name','alex'}

# print(a.add(b))

# 3
# 5
# 477162 658880 751280 927930 297191
# 5
# 565469 851600 460874 148692 111090
# 10
# 784386 279993 982220 996285 614710 992232 195265 359810 919192 158175

# 우선 3을 받아본다 == 테스트 케이스 숫자
T = int(input())
for test_case in range(1, T+1):
  # 각자의 테스트 케이스 안에서 숫자 갯수
  N = int(input())
  nums = list(map(int, input().split()))
  answer = max(nums) - min(nums)
  print(f'#{test_case} {answer}')
  

nums = list(map(int, input().split()))
answer = nums[0] + nums[1]
print(answer)

