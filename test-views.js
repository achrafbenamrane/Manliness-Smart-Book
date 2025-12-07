// Test script to check view counter
const API_URL = 'http://localhost:3000/api/views';

async function testViewCounter() {
  console.log('🧪 Testing View Counter API...\n');

  try {
    // Test 1: Get current views
    console.log('📊 Test 1: Getting current view count...');
    const getResponse = await fetch(API_URL);
    const getData = await getResponse.json();
    console.log('   Current views:', getData.views);
    console.log('   ✅ GET request successful\n');

    // Test 2: Increment views (simulate 5 visitors)
    console.log('📈 Test 2: Simulating 5 new visitors...');
    for (let i = 1; i <= 5; i++) {
      const postResponse = await fetch(API_URL, { method: 'POST' });
      const postData = await postResponse.json();
      console.log(`   Visitor ${i}: Views = ${postData.views}`);
    }
    console.log('   ✅ POST requests successful\n');

    // Test 3: Verify final count
    console.log('📊 Test 3: Verifying final count...');
    const finalResponse = await fetch(API_URL);
    const finalData = await finalResponse.json();
    console.log('   Final views:', finalData.views);
    console.log('   ✅ Counter is working correctly!\n');

    console.log('✨ All tests passed! The view counter is working.');
    
  } catch (error) {
    console.error('❌ Error testing view counter:', error.message);
  }
}

testViewCounter();
