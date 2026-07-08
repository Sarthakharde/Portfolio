let pdf= document.getElementById('s');
pdf.addEventListener('change',function(){
    if (this.value){
        window.open(this.value,"_blank");
        this.selectedIndex=0;
    }
});