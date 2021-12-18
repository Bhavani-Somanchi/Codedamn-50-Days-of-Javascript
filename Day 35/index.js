function nthlargest(arr, highest) {
	// write your code here
    
    var heap = new MaxHeap();
    for(let i = 0; i < arr.length; i++)
    heap.insert(arr[i]);

    for(let i = 1; i < highest; i++)
    heap.remove();

	return heap.getMax();
    
}



class MaxHeap
{
    constructor() {
        this.heap = new Array();
    }

    getMax()
    {
        return parseInt(this.heap[0]);
    }

    getHeap()
  {
    return this.heap;
  }

    insert(node)
    {
        this.heap.push(node);

        let current = this.heap.length - 1;

        while(current > 0 && (this.heap[Math.floor((current+1)/2)-1] < this.heap[current]))
        {
            [this.heap[Math.floor((current+1)/2)-1], this.heap[current]] = [this.heap[current], this.heap[Math.floor((current+1)/2)-1]];
            current = Math.floor((current+1)/2)-1;
        }
    }

    remove()
    {
        let highest = this.heap[0];

        if(this.heap.length > 1)
        {
            this.heap[0] = this.heap[this.heap.length-1];
            this.heap.splice(this.heap.length-1);

            if(this.heap.length === 2)
            {
                if(this.heap[0] < this.heap[1])
                [this.heap[0], this.heap[1]] = [this.heap[1], this.heap[0]];
            }
            else
            {

                let current = 0;
                let leftIndex = 2*current+1;
                let rightIndex = 2*current+2;

                while (this.heap[leftIndex] && this.heap[rightIndex] && (this.heap[leftIndex] > this.heap[current] || this.heap[rightIndex] > this.heap[current]))
                {
                    if(this.heap[leftIndex] > this.heap[rightIndex])
                    {
                        [this.heap[current], this.heap[leftIndex]] = [this.heap[leftIndex], this.heap[current]];
                        current = leftIndex;
                    }
                    else
                    {
                        [this.heap[current], this.heap[rightIndex]] = [this.heap[rightIndex], this.heap[current]];
                        current = rightIndex;
                    }

                    leftIndex = 2*current+1;
                    rightIndex = 2*current+2;
                }
            }
        }
    }
}

const arr = [43, 56, 23, 89, 88, 90, 99, 652];
//const arr = [10, 100, 1000, 10000];
const highest = 2;

console.log(nthlargest(arr, highest));