# DFS
#### 깊이 우선 탐색이란 뜻~
기본적으로 스택 자료구조로 돌아간다

1. 시작 노드를 스택에 넣고 방문 처리
1. 스택에 마지막으로 들어 온 노드에 방문 처리하지 않는 인접 노드를 확인
    - 있다면 방문하지 않은 인접 노드를 스택에 넣고 방문 처리
    - 없다면 현재 노드를 스택에서 추출
1. 2번 과정을 더 이상 반복할 수 없을 때까지 반복

구현의 편리성이 있지만 완전 탐색이 목적일 때 BFS보다 느린 경향이 있다.


```javascript
function dfs(graph, v, visited) {
  visited[v] = true;
  console.log(v);
  for (i of graph[v]) {
    if (!visited[i]) {
      dfs(graph, i, visited);
    }
  }
}
```