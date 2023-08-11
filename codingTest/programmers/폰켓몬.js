function solution(nums) {
  let data = [];
  let answer = [];
  let pick = 0;
  for(let i = 0; i < nums.length; i++) {
      if(!data.includes(nums[i])) {
          data.push(nums[i]);
      }
  }
  pick = nums.length / 2;
  if (data.length < pick) {
      return data.length
  } else {
      for(let i = 0; i < pick; i++) {
          if(!answer.includes(data[i])) {
              answer.push(data[i])            
          }
      }
      return answer.length;
  }
}
// new Set과 Map이 아직 불편해서 .includes()를 이용해서 풀었다.
// 좋은 풀이는 아니니 꼭 Set 사용을 숙달하자.

function solution(nums) {
  const noDuplicatePokemon = new Set(nums);
  const pokemonVarietyCount = noDuplicatePokemon.size;
  const pokemonCounts = nums.length;
  return pokemonVarietyCount > pokemonCounts/2 ? pokemonCounts/2 : pokemonVarietyCount;

}
// 세트를 쓰면 이렇게 깔끔한데...