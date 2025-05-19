const btn = document.getElementById("getcode")
const frame = document.getElementById("frame")
const p = document.getElementById("key")
const param = new URLSearchParams(window.location.search)
const key = BigInt(param.get("key"))

console.log(key)

function decimalToString(dec) {
	let hex = dec.toString(16).padStart(20, "0")

	let result = "";
	for (let i = 0; i < hex.length; i += 2) {
		let part = hex.substring(i, i + 2);
		let charCode = parseInt(part, 16);
		result += String.fromCharCode(charCode);
	}
	return result;
}

btn.addEventListener("click", function() {
  frame.style.height = "100px"
  p.textContent = decimalToString(key)
  btn.style.width = "80%"
  btn.style.color = "rgba(255, 255, 255, 0)"
  
  setTimeout( () => {
    p.style.opacity = "1"
  }, 300)
  
  setTimeout( () => {
  	btn.textContent = "CHẠM VÀO MÃ ĐỂ SAO CHÉP"
  	btn.style.color = "rgba(255, 255, 255, 1)"
  }, 100)
})

p.addEventListener("click", function() {
	navigator.clipboard.writeText(decimalToString(key))
		.then(() => alert("Đã sao chép"))
		.catch(() => alert("Không thể sao chép"))
})