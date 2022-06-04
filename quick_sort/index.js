const nums = [4, 2, 6, 5, 3, 9, 100, 1, 2, 3, 10];

const swap = (items, firstIndex, secondIndex) => {
    let tempValue = items[firstIndex];

    items[firstIndex] = items[secondIndex];
    items[secondIndex] = tempValue;
}

const partition = (items, firstIndex, lastIndex) => {
    let pivot = items[Math.floor((firstIndex + lastIndex) / 2)];

    while (firstIndex <= lastIndex) {
        while (items[firstIndex] < pivot) {
            firstIndex++;
        }  

        while(items[lastIndex] > pivot) {
            lastIndex--;
        }

        if (firstIndex <= lastIndex) {
            swap(items, firstIndex, lastIndex);

            firstIndex++;
            lastIndex--;
        }
    }

    return firstIndex;
}

const quickSort = (items, firstIndex = null, lastIndex = null) => {
    if (items.length > 1) {

        firstIndex = (firstIndex === null) ? 0 : firstIndex;
        lastIndex = (lastIndex === null) ? items.length - 1 : lastIndex;

        let index = partition(items, firstIndex, lastIndex);

        if (firstIndex < index - 1) {
            quickSort(items, firstIndex, index - 1);
        }

        if (index < lastIndex) {
            quickSort(items, index, lastIndex);
        }
    }

    return items;
}

console.log(quickSort(nums));