from django.urls import path

from rest_framework import routers
from .views import DepartmentViewSet, EmployeeListViewSet

router = routers.DefaultRouter()
router.register('department', DepartmentViewSet, basename='department')
router.register('employee', EmployeeListViewSet, basename='employee')

urlpatterns = []
urlpatterns += router.urls