
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';


Then('products should be sorted by alphabetically', function () {
  
  const responseData = this.json;
  const products = responseData.results;

  for ( let i = 0; i < products.length - 1; i++ ) {
    let currentName = products[ i ].name.toLowerCase();
    let nextName = products[ i + 1 ].name.toLowerCase();
    expect( currentName <= nextName, `Product at index ${ i } with name "${ currentName }" should be before product at index ${ i + 1 } with name "${ nextName }"` );
  }
    

});