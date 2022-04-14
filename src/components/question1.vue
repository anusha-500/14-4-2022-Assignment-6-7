<template>
    <div>
        <head>Assignment-7</head>
        <h1>Question-1</h1>
        <p>To check the function call</p>
        <p id="demo"></p>
{{circle.diameter()}}
<br><br>
{{circle.perimeter()}}
        </div>
</template>
<script>
export default{
    name:"Question1AA",
    data(){
        return{
             circle : {
radius: 20,
diameter() {
  return this.radius * 2;
},
perimeter: () => 2 * Math.PI * this.radius,
}
        }
    }
    }
</script>
