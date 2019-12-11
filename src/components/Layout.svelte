
<page>
  <div class="row">
    <div class="column1">
        <div class="image">
          <slot name="image" />
        </div>
        <slot name="aside" />
    </div>
    <div class="column2">
        <slot name="overview" />
        <slot name="main" />
    </div>
  </div>
</page>

<style>

.row {
  display: flex;
  height: 100%;
}
.column1 {
  flex: 25%;
  background-color: #3da4ab;
  color: white;
  box-shadow: 10px 0 20px -5px rgba(115,115,115,0.75);
  padding-top: 45px;
  font-size: 12px;
  padding-left: 15px;
  padding-right: 15px;
}

.column1 .image {
  border-radius: 12px;
  background: #f6db5f;
  padding: 8px;
  width: 150px;
  height: 150px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px; 
  margin-bottom: 100px;
}

.column2{
  flex: 75%;
  padding-top: 50px;
}

:global(.column1 h2) {
    margin-top: 30px;
    margin-bottom: 15px;
    text-align: center;
    font-size: 20px;
    border-top: 1px #f6db5f solid;
    border-bottom: 1px #f6db5f solid;
}

:global(.column2 h2){
    text-align: center;
    background-color: #f6db5f;
    border-top: 1px #f6db5f solid;
    border-bottom: 1px #f6db5f solid;
    font-weight: normal;
    color: white;
    margin-left: 2px;
}

:global(.column2 .resume) {
    color: transparent;
    text-shadow: 0 0 0px gray;}

:global(.column2 dd) {
    margin-top: 10px;
    margin-bottom: 15px;
}

:global(.column2 dl){
    margin-right: 20px;
    margin-left: 30px;
    margin-top: 20px;
    border-left: 2px solid #f6db5f;
    padding-left: 15px;
}

</style>