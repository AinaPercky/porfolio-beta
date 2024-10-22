const scrollObserver=()=>{
    console.log("scrollObserve");
    const element=document.querySelectorAll('.part');
    console.log('elementObs',element);
    const observer=new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
            const targetId=entry.target.getAttribute('id');
            console.log('target antry',entry.target.getAttribute('id'));
            const navChildMenu=document.querySelectorAll('.navChildMenu');
            navChildMenu.forEach(item=>{
                const navItem=item.children.item(0).innerHTML;
                if(navItem!=targetId){
                    item.children.item(0).classList.remove('active');
                }
                else{
                    item.children.item(0).classList.add('active');
                }
            })
            }
        })
    })
    console.log("element",element);
    element.forEach(item => {
        observer.observe(item);
    });
}
export default scrollObserver