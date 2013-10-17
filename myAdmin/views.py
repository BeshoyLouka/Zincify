from django.shortcuts import render_to_response

def myAdmin(request):
	return render_to_response('myAdmin/Admin.html')
