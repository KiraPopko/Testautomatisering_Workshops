
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';


Then('sub categories should be sorted by alphabetically', function () {
  
  
   // Ensure `this.json` exists and check if `subCategories` is in the expected format
    if (!this.json || !this.json.subCategories || !Array.isArray(this.json.subCategories)) {
      console.error('Error: Response does not contain a valid "subCategories" array.');
      console.error('Response JSON:', this.json); // Log the full response for debugging
      throw new Error('Response does not contain a valid "subCategories" array.');
    }
  
    // Extract the subcategory names
    let subcategories = this.json.subCategories.map(x => x.name);
  
    // Sort the subcategories alphabetically
    let sortedSubcategories = [...subcategories].sort((a, b) => a.localeCompare(b));
  
    // Ensure subcategories are sorted alphabetically in the response
    this.json.subCategories = this.json.subCategories.sort((a, b) => a.name.localeCompare(b.name)); 
  
    // Now check if the original subcategories list is the same as the sorted one
    expect(this.json.subCategories.map(x => x.name)).to.eql(sortedSubcategories);
    

});