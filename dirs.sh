n=1;
max=500000;
while [ "$n" -le "$max" ]; do
  mkdir "$n"
  n=`expr "$n" + 1 `;
done
