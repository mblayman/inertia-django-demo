from django.shortcuts import render
from inertia import inertia


def index(request):
    return render(request, "index.html", {})


@inertia("demo/Index")
def inertia_demo(request):
    return {"someProp": "hello world"}
