from django.shortcuts import render
from inertia import inertia


def index(request):
    return render(request, "index.html", {})


@inertia("IndexPage")
def inertia_demo(request):
    return {"some_prop": True}
