
const Komp7 = () => {
     let antraste = ' objektu masyvas';

     let links = [
        {id: 1, url: 'https://www.delfi.lt/', title: 'pradzia'},
        {id: 2, url: 'https://www.delfi.lt/', title: 'paslaugos'},
        {id: 3, url: 'https://www.delfi.lt/', title: 'apie mus'},
        {id: 4, url: 'https://www.delfi.lt/', title: 'kontaktai'}
     ]
   
   return (
     
       <div>
           <h2>{antraste}</h2>
           <ul>
           {
            links.map(link => <li key={link.id}><a href={link.url}>{link.title}</a></li>)
           }
           </ul>
         
       </div>
   )
};

export default Komp7;
