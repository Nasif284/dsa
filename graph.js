class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertexes(vtx) {
    if (!this.adjacencyList[vtx]) {
      this.adjacencyList[vtx] = [];
      return true;
    }
    return false;
  }
  addEdges(vtx1, vtx2) {
    if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
      this.adjacencyList[vtx1].push(vtx2);
      this.adjacencyList[vtx2].push(vtx1);
      return true;
    }
    return false;
  }
  removeEdges(vtx1, vtx2) {
    if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
      this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter((e) => e !== vtx2);
      this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter((e) => e !== vtx1);
      return true;
    }
    return false;
  }
  removeVertex(vtx) {
    if (!this.adjacencyList[vtx]) {
      return false;
    }

    for (let nbr of this.adjacencyList[vtx]) {
      this.adjacencyList[nbr] = this.adjacencyList[nbr].filter((e) => e !== vtx);
    }
    delete this.adjacencyList[vtx];
    return true;
  }
  
  dfs(start) {
    let visited = new Set();

    const helper = (vtx) => {
      console.log(vtx);
      visited.add(vtx);

      for (let nbr of this.adjacencyList[vtx]) {
        if (!visited.has(nbr)) {
          helper(nbr);
        }
      }
    };

    helper(start);
  }

  bfs(start) {
    let visited = new Set([start]);
    let queue = [start];

    while (queue.length > 0) {
      let vtx = queue.shift();
      console.log(vtx);

      for (let nbr of this.adjacencyList[vtx]) {
        if (!visited.has(nbr)) {
          visited.add(nbr);
          queue.push(nbr);
        }
      }
    }
  }
  
    shortestPath(start, end) {
        let visited = new Set([start])
        let queue = [start]
        let parent = {}
        while (queue.length > 0) {
            let vtx = queue.shift()
            if (vtx == end) break
            for (let nbr of this.adjacencyList[vtx]) {
                if (!visited.has(nbr)) {
                    visited.add(nbr)
                    parent[nbr] = vtx
                    queue.push(nbr)
                }
            }
        }

        let path = []
        let cur = end
        while (cur !== undefined) {
            path.push(cur)
            cur = parent[cur]
        }
        return path.reverse()
    }
}

let g = new Graph();
g.addVertexes("A");
g.addVertexes("B");
g.addVertexes("C");
g.addVertexes("D");
g.addVertexes("F")
g.addEdges("A", "C");
g.addEdges("A", "B");

g.addEdges("B", "D");
g.addEdges("D", "C");
g.addEdges("D", "F");
// g.removeEdges("A", "B");
// g.removeVertex("B")
// g.dfs("A");
// g.bfs("A")
console.log(g.shortestPath("A", "F"));

