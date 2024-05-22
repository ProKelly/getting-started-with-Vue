<script>
  export default{
    data() {
      return {message: 'some text is here'};
    }
  };
</script>

<template>
<h1>
  {{ message }}
</h1> 
<h1>Food</h1>
<div id="wrapper">
    <food-item
      food-name="Apples"
      food-desc="Apples are a type of fruit that grow on trees."
      is-fav = 'true'
      />
    <food-item
      food-name="Pizza"
      food-desc="Pizza has a bread base with tomato sauce, cheese, and toppings on top."
      is-fav = 'false'
      />
    <food-item
      food-name="Rice"
      food-desc="Rice is a type of grain that people like to eat."
      is-fav = 'true'
      />
      <food-item
      food-name="Rice"
      food-desc="Rice is a type of grain that people like to eat."
      is-fav = 'true'
      />
  </div>
</template>

<style>
    
  #app > div:hover {
    cursor: pointer;
  }
  #wrapper {
    display: flex;
    flex-wrap: nowrap;
  }
  #wrapper > div {
    border: dashed black 1px;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
  }
</style>