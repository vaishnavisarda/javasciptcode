function f1() {
    this.name = "s"
    console.log(this.clearTimeout)

}

function f2(){
    console.log(this.name)
}

f1()
f2()
f1()
console.log(this.clearTimeout)