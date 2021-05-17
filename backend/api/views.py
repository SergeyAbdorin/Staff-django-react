from rest_framework import viewsets


from .serializers import (
    DepartmentSerializer,
    DepartmentDetailSerializer,
    EmployeeListSerializer
)
from ..models import Department, Employee


class DepartmentViewSet(viewsets.ModelViewSet):

    queryset = Department.objects.all().order_by('title')
    serializer_class = DepartmentSerializer

    action_to_serializer = {
        "retrieve": DepartmentDetailSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )


class EmployeeListViewSet(viewsets.ModelViewSet):

    queryset = Employee.objects.all().order_by('last_name')
    serializer_class = EmployeeListSerializer



