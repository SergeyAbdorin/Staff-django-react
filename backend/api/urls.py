from django.urls import path

from rest_framework import routers
from .views import DepartmentViewSet, EmployeeViewSet, EmployeeListViewSet

router = routers.DefaultRouter()
router.register('department', DepartmentViewSet, basename='department')
router.register('employee', EmployeeListViewSet, basename='employee')

urlpatterns = []
urlpatterns += router.urls