
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';






Then('subcategories of category "{categoryUrlPart}" should be sorted by URL', function (categoryUrlPart) {
  const axios = require('axios');
let categoryData = [];
  const urls = categoryData.map(subcat => subcat.url);
  const sortedUrls = [...urls].sort();
  if (JSON.stringify(urls) !== JSON.stringify(sortedUrls)) {
    throw new Error(`Subcategories for ${categoryUrlPart} are not sorted by URL: ${urls}`);
  }
});
