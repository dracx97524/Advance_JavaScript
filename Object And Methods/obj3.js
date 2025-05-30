const user1 = {
    username: "rpchan",
    subscriptionLevel: "bronze",
  }
  
  const user2 = {
    username: "bcstevens",
    subscriptionLevel: "silver",
    accessPremiumFeature: true
  }
  
  function canAccessPremiumFeature(userObj, prop) {

     const property = Object.hasOwn(userObj,prop)
     return property
  /*
  Challenge:
  1. Write logic to check if the object has the property. 
     Do this challenge twice, once with hasOwn and once 
     with hasOwnProperty. All the function need do is return
     a boolean. 
     Bonus: use short circuiting to only return true if 
     'accessPremiumFeature' both exists AND is true.
  */ 
  }
    
  function canAccessPremiumFeature2(userObj, prop) {

    const property = userObj.hasOwnProperty(prop) && user1.prop
    return property;
 /*
 Challenge:
 1. Write logic to check if the object has the property. 
    Do this challenge twice, once with hasOwn and once 
    with hasOwnProperty. All the function need do is return
    a boolean. 
    Bonus: use short circuiting to only return true if 
    'accessPremiumFeature' both exists AND is true.
 */ 
 }
  
  console.log(canAccessPremiumFeature(user1, 'accessPremiumFeature'))
  console.log(canAccessPremiumFeature(user2, 'accessPremiumFeature')) 
  
  