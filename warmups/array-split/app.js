function chunkArrayInGroups(arr, num) {
	var newArr = [];
	for (var i = 0; i < arr.length; i+= num) {
		newArr.push(arr.slice(i, i + num))
	}
	console.log(newArr);
}

chunkArrayInGroups(["a", "b", "c", "d"], 2)
//[["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)
//[[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)
// [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)
//[[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)
//[[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)
//[[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)
//[[0, 1], [2, 3], [4, 5], [6, 7], [8]].
