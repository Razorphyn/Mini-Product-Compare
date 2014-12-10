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
The default behaviour of this extension is to disable left and right sidebar compare products block.
To revert this setting open **/app/design/frontend/<your theme>/default/layout/minicompare.xml** and comment these lines:

```xml
<!-- Disable compare product block on left and right sidebar -->
<reference name="right">
	<action method="unsetChild">
		<name>catalog.compare.sidebar</name>
	</action>
	</reference>
<reference name="left">
	<action method="unsetChild">
		<name>catalog.compare.sidebar</name>
	</action>
</reference>
```

####DISABLE MODULE
*System*->*Configure*->*Advanced*->*Advanced*

*Razorphyn_Minicompare* -> *Disable*

####UNISTALL
Manually remove all the extension files
