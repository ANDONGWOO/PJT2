"""config URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from . import views

app_name = "community"

urlpatterns = [
    path('', views.index, name='index'),#qna목록
    path('qna_create/', views.qna_create, name='qna_create'),
    path('<int:qna_pk>/', views.qna_detail, name='qna_detail'),
    path('<int:qna_pk>/qna_update/', views.qna_update, name='qna_update'),
    path('<int:qna_pk>/qna_delete/', views.qna_delete, name='qna_delete'),

    path('review_index/', views.review_index, name='review_index'),#리뷰목록
    path('review_create/', views.review_create, name='review_create'),
    path('<int:review_pk>/', views.review_detail, name='review_detail'),
    path('<int:review_pk>/review_update/', views.review_update, name='review_update'),
    path('<int:review_pk>/review_delete/', views.review_delete, name='review_delete'),
]
