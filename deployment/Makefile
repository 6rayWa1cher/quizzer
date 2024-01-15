install-deps:
	ansible-galaxy install -r requirements.yml

deploy-test:
	ansible-playbook -i inventory main.yaml --limit test

deploy-prod:
	ansible-playbook -i inventory main.yaml --limit prod
