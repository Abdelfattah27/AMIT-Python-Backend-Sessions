# outline 
1. grid
   1. parent
      1. grid-template-columns ; -- Number of Columns
         1. 100px
         2. 20%
         3. auto auto 
         4. 1fr 2fr 2fr
         5. combinations 
         6. 1fr vs auto 
         7. repeat(4 , 100px)
         8. repeat(auto-fill , 100px)
         9. repeat(auto-fill , minmax(100px , auto))
      2. grid-template-rows ;
         1. 100px
         2.  20%
         3. auto auto 
         4. 1fr 2fr 2fr
         5. combinations 
         6. repeat(4 , 100px)
         7. minmax(100px , 200px) --over flow  
         8. minmax(100px , auto) --over flow  
      3. row-gap 
         1. 1px 
      4. column-gap
         1. 1px
      5. gap 
         1. row column ; 2px 4px
      6. justify-content
         1. start
         2. end
         3. center
         4. space-between
         5. space-around 
         6. space-evenly
      7. align-content
         1. start
         2. end
         3. center
         4. space-between
         5. space-around 
      8. grid-template-areas : " hamada ."
   2. child
      1. grid-column-start
         1. 1
      2. grid-column-end 
         1. 1 , -1
      3. grid-column: 
         1. start end ; 1/3 -- from 1 to 3 
      4. grid-row-start
         1. 1
      5. grid-row-end
         1. 1,-1
      6. grid-row 
         1. start end -- 1/3
      7. grid-area : hamada