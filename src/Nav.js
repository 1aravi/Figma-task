import React from 'react'

const Nav = () => {
  return (
    <div>
      <nav class="flex  flex-wrap justify-start lg:justify-end space-x-4">
        
        <div class="logo">
        <img src='img/Logo (1).png' alt="Frame"/> 
     </div>
        
        
  
  <a href="/purpose" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Purpose</a>
  <a href="/products" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Products</a>
  <a href="/contact us" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Contact Us</a>
</nav>
    </div>
  )
}

export default Nav;
