Mini Product Compare
====================

Move product compare block to header links, mouseover the link to show the block
Basically is the same concept behind the Mini cart solution, but applied to the product comapre block

####INSTALLATION
1. Unzip the files 
2. If necessary rename **app/design/frontend/default** and  **skin/frontend/default** folders to your theme folder name
3. Upload the files inside the magento root folder
4. Clean the cache

####DISBALE PRODUCT COMPARE BLOCK ON ALL PAGES
Edit or create a file named **local.xml** inside **/app/design/frontend/<your theme>/default/layout/**

```xml
<layout version="0.1.0">
   <default>
      <reference name="right">
         <remove name="catalog.compare.sidebar"/> 
      </reference>
      <reference name="left">
         <remove name="catalog.compare.sidebar"/> 
      </reference>
   </default>
</layout>
```

####DISABLE MODULE
*System*->*Configure*->*Advanced*->*Advanced*

*Razorphyn_Minicompare* -> *Disable*

####UNISTALL
Manually remove all the extension files
