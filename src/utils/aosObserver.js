const aosObserver=()=>{
        const element=document.querySelectorAll('.animate_element');
        const observer=new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
            entry.target.classList.add('animate_')
            }
        })
        })
        console.log("element",element);
        element.forEach(item => {
        observer.observe(item);
        });
        // observer.observe(element);
        const element2=document.querySelectorAll('.animate_element_2');
        const observer2=new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
            entry.target.classList.add('animate_2')
            }
        })
        })
        element2.forEach(item => {
        observer2.observe(item);
        });
}
export default aosObserver