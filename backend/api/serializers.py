from rest_framework import serializers

from ..models import Department, Employee


class DepartmentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Department
        fields = '__all__'


class DepartmentDetailSerializer(serializers.ModelSerializer):

    staff = serializers.SerializerMethodField()

    class Meta:
        model = Department
        fields = '__all__'

    @staticmethod
    def get_staff(obj):
        return EmployeeSerializer(Employee.objects.filter(department=obj), many=True).data


class EmployeeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Employee
        fields = '__all__'


class EmployeeListSerializer(serializers.ModelSerializer):


    class Meta:
        model = Employee
        fields = '__all__'

    def to_representation(self, instance):
        rep = super(EmployeeListSerializer, self).to_representation(instance)
        rep['department'] = instance.department.title
        return rep

