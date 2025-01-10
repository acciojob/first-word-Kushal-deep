function firstWord(s) {
  // your code here
let index
let index2
for(i=0;i<s.length;i++){
		if(s[i]!==" "){
			index=i;
			break;
		}
	}
let ans=""
	for(j=index;j<s.length;j++){
		if(s[j]==" "){
		    index2=j;
		    break;
		
		}
	}
ans=s.slice(index,index2)

	return ans

	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s)); 
