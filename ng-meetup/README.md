Presentations for the [Rocky Mountain Angular](https://www.meetup.com/RockyMountainAngular/) meetup.

## Creating a new presentation

Copy the template to a new directory in the appropriate subdirectory for the year and month of the meetup: `ng-meetup/{year}/{month}/{presentation-name}` (you may need to create the subdirectories first). For example:

```
mkdir -p 2017/08
cp -r template 2017/08/my-presentation
```

Change to the directory you just copied and update the information for the title slide (be sure to change the title, presenter, and contact to reflect your information):

```
cd 2017/08/my-presentation
sed -ei 's/#title/My Presentation/g' index.html
sed -ei 's/#presenter/John Doe/g' index.html
sed -ei 's/#github/jdoe/g' index.html
```
