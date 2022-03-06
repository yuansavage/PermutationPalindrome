<template>
  <div class="TextInput">
    <div class="inputArea">
      <img alt="Vue logo" style="width:150px;margin-bottom:5px;" src="../assets/logo.png" />
      <input type="text" placeholder="Please type some words" class="text-input" v-model="textValue">
      <button class="check-btn" @click="checkPermutationsIsPalindrome(textValue)">check</button>
      <button class="reset-btn" @click="reset">reset</button>
    </div>
    <div class="ansArea">
      The answer is: {{ouputValue}}
    </div>
  </div>
  
</template>

<script>
export default {
  name: "TextInput",
  data(){
    return{
      textValue:"",
      ouputValue:""
    }
  },
  methods:{
    checkPermutationsIsPalindrome(str){
      const arr = this.findPermutations(str);
      if(arr.length>0){
        for(let i=0;i<arr.length;i++){
          if(this.checkPalindrome(arr[i])){
            this.ouputValue="True"
            return;
          }
        }
        this.ouputValue = "False";
      }
      else{
        this.ouputValue="False"
      }
    },
    findPermutations(input){
      let permutationsArray = [];
      
      if(!input || typeof input!=="string"){
        return permutationsArray;
      }
      else if (input.length<2){
        permutationsArray.push(input);
        return permutationsArray;
      }
      
      input = input.toLowerCase();
      input = input.replace(/ /g,'');
      
      for(let i=0;i<input.length;i++){
        
        let char = input[i];
        if(input.indexOf(char)!=i)continue;
        let remainingChars = input.slice(0,i) + input.slice(i+1,input.length);
        for(let permutation of this.findPermutations(remainingChars)){
          permutationsArray.push(char+permutation);
        }
      }
      return permutationsArray;
    },
    checkPalindrome(str){
      const arrayValues = str.split('');
      const reverseArrayValues = arrayValues.reverse();
      const reverseString = reverseArrayValues.join('');
      if(str == reverseString)return true;
      else return false;
    },
    reset(){
      this.textValue="";
      this.ouputValue="";
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.TextInput{
  .inputArea{
    padding: 10px;
    width: 300px;
    background-color: black;
    border: solid 1px black;
    .text-input:focus{
      outline: none;
    }
    .check-btn,.reset-btn{
      cursor: pointer;
      margin-left: 10px;
      border-radius: 2px;
    }
  }
  .ansArea{
    background-color: white;
    border: solid 1px black;
    width: 300px;
    height: 50px;
    padding: 10px;
  }
}
</style>
