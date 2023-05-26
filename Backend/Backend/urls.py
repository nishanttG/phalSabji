from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.views.generic import TemplateView
from . import settings

admin.site.site_header = "phal-Sabji Sanjaal Admin"
admin.site.site_title = "phal-Sabji Admin Portal"
admin.site.index_title = "Welcome to phal-Sabji Sanjaal Portal"

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api_app.urls')),
    path('', TemplateView.as_view(template_name='index.html')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
