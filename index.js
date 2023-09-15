setInterval(()=>{
    roman = document.getElementById("roman").value
    output = document.getElementById("output")
    output.innerText = 0
    m = {'I': 1,'V': 5,'X': 10,'L': 50,'C': 100,'D': 500,'M': 1000};
    for (i = 0; i<roman.length;i++){
        roman = roman.toUpperCase();
        if (i < roman.length - 1 && m[roman[i]] < m[roman[i+1]]){
            output.innerText = +output.innerText - m[roman[i]]
        }
        else{
            output.innerText = +output.innerText + m[roman[i]]
        }
    }
},1)
/*
for i in range(len(s)):
print(i < len(s))
print(m[s[i]])
if i < len(s) - 1 and m[s[i]] < m[s[i+1]]:
    ans -= m[s[i]]
else:
    ans += m[s[i]]*/