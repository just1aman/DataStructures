//lets create our own array

class myArray{
  constructor()
  {
  this.length=0
  this.data={}

  }

get(index)
{
  return this.data[index]
}

  push(item)
  {
    this.data[this.length]= item
    this.length++
    return this.data
  }

deletelast()
{
  const lastitem = this.data[this.length]
  delete this.data[this.length-1]
  this.length--
  return lastitem
}
  deleteAtIndex(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    console.log(this.data[this.length - 1]);
    delete this.data[this.length - 1];
    this.length--;
  }
}

const awsArray = new myArray();
console.log(awsArray)
awsArray.push("S3")
awsArray.push("EC2")
awsArray.deletelast()
awsArray.push("EC2")

console.log(awsArray)