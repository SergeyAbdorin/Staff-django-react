from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from backend.views import index, department_detail, employee_detail, add_employee

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index),
    path('department/<int:id>/', department_detail),
    path('employee/<int:id>/', employee_detail),
    path('employee/AddEmployee/', add_employee),
    path('api/', include('backend.api.urls')),
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    # path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
