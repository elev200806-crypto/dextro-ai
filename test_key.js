const fs = require('fs');

async function testKey() {
  const key = 'AIzaSyB-XVHZ-uIPH16bvMx0yaeeQKPinqIHEFE';
  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${key}`);
    const data = await res.json();
    console.log(JSON.stringify(data.models.map(m => m.name), null, 2));
  } catch(e) {
    console.error(e);
  }
}
testKey();
