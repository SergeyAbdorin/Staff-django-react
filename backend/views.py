from django.shortcuts import render


def index(request):
    return render(request, 'index.html', {})


def department_detail(request, id):
    return render(request, 'index.html', {})


def employee_detail(request, id):
    return render(request, 'index.html', {})

def add_employee(request):
    return render(request, 'index.html', {})
