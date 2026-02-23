# 🚀 **Job Tracker**
A simple web-based tool to track job applications, interviews, and rejections.

## 🛠️ Tech Stack
* HTML5
* CSS (Tailwind + DaisyUI)
* JavaScript (Vanilla)

 ## 🧠 Some JavaScript DOM Q&A
**1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**
*getElementById() : Selects a single unique id attribute element. It returns a single element and if no match is found, it returns null. It is very fast and efficient.
                    Syntax: document.getElementById("id_name");
                    
*getElementsByClassName() :  Selects all elements that have the specified class names. It returns a HTMLCollection, which is an array-like object and if no match is found it returns [].
                             It is less faster than getElementById(). 
                             Syntax: document.getElementsByClassName("class_name");
                             
*querySelector() : Selects the first element that match any valid CSS selector. It returns the 1st element and if no match is found, it returns null. It is slower than getElementById() 
                   and getElementsByClassName().
                   Syntax: document.querySelector("#id_name" / ".class_name" / "tag_name");
                   
*querySelectorAll() : Selects all elements that match any valid CSS selector. It returns a NodeList, which is an array-like object and if no match is found it returns []. It is 
                      also slower than getElementById() and getElementsByClassName().
                      Syntax: document.querySelectorAll("#id_name" / ".class_name" / "tag_name");


**2. How do you create and insert a new element into the DOM?**    
*To create and insert a new element into the DOM, first we have to create element and set innerText or innerHTML.
const child = document.createElement('tag_name');
child.innerText = "Text updated";

*Then we have to find the parent where we will add the child.
const parent = document.getElementById('parent_id');

*Lastly we have to append the child to the parent.
parent.appendChild(child);


**3.What is Event Bubbling? And how does it work?**
Event Bubbling is a way of handling events in the browser where an event starts at the child and then bubbles up to the Parent and Grandparent one by one untill
it gets to the root element.

Working of the Event Bubbling:
When we click an element it doesn't just stay there, it travels upwards. It starts at the specific item we touched, which is known as the child, then moves to the parent and continues
through the grandparent, then the parent of grandparent and so on until it reaches the root of the webpage.


**4. What is Event Delegation in JavaScript? Why is it useful?**
Event Delegation is a smart way to manage events by attaching a single event listener to a parent element instead of attaching many listeners to every individual child element.

It is useful because it reduces the number of event listeners. It also reduces the memory usages. It is the best way for dynamically added elements.


**5. What is the difference between preventDefault() and stopPropagation() methods?**
*preventDefault() method prevents the browser from executing the default behavior of the selected element.
Syntax: event.preventDefault();

*stopPropagation() method is used to prevent the parent element from accessing the event. Basically, this method is used to prevent the propagation of the same event from being called.
Syntax: event.stopPropagation();
