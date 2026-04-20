from django.shortcuts import render
from django.http import HttpResponse
from myapp.models import Person

def index(request):
    all_Person = Person.objects.all()
    return render(request, "index.html", {"all_person": all_Person})

def about(request):
    return render(request, "about.html")

def contact(request):
    return render(request, "contact.html")

def form(request):
    return render(request, "form.html")
